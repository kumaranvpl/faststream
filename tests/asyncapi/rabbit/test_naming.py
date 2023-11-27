from typing import Type

from faststream import FastStream
from faststream.asyncapi.generate import get_app_schema
from faststream.rabbit import RabbitBroker
from tests.asyncapi.base.naming import NamingTestCase


class TestNaming(NamingTestCase):
    broker_class: Type[RabbitBroker] = RabbitBroker

    def test_subscriber_with_exchange(self):
        broker = self.broker_class()

        @broker.subscriber("test", "exchange")
        async def handle():
            ...

        schema = get_app_schema(FastStream(broker)).to_jsonable()

        assert list(schema["channels"].keys()) == ["test:exchange:Handle"]

        assert list(schema["components"]["messages"].keys()) == [
            "test:exchange:Handle:Message"
        ]

    def test_publisher_with_exchange(self):
        broker = self.broker_class()

        @broker.publisher("test", "exchange")
        async def handle():
            ...

        schema = get_app_schema(FastStream(broker)).to_jsonable()

        assert list(schema["channels"].keys()) == ["test:exchange:Publisher"]

        assert list(schema["components"]["messages"].keys()) == [
            "test:exchange:Publisher:Message"
        ]

    def test_base(self):
        broker = self.broker_class()

        @broker.subscriber("test")
        async def handle():
            ...

        schema = get_app_schema(FastStream(broker)).to_jsonable()

        assert schema == {
            "asyncapi": "2.6.0",
            "defaultContentType": "application/json",
            "info": {"title": "FastStream", "version": "0.1.0", "description": ""},
            "servers": {
                "development": {
                    "url": "amqp://guest:guest@localhost:5672/",  # pragma: allowlist secret
                    "protocol": "amqp",
                    "protocolVersion": "0.9.1",
                }
            },
            "channels": {
                "test:_:Handle": {
                    "servers": ["development"],
                    "bindings": {
                        "amqp": {
                            "is": "routingKey",
                            "bindingVersion": "0.2.0",
                            "queue": {
                                "name": "test",
                                "durable": False,
                                "exclusive": False,
                                "autoDelete": False,
                                "vhost": "/",
                            },
                            "exchange": {"type": "default", "vhost": "/"},
                        }
                    },
                    "subscribe": {
                        "bindings": {
                            "amqp": {
                                "cc": "test",
                                "ack": True,
                                "bindingVersion": "0.2.0",
                            }
                        },
                        "message": {
                            "$ref": "#/components/messages/test:_:Handle:Message"
                        },
                    },
                }
            },
            "components": {
                "messages": {
                    "test:_:Handle:Message": {
                        "title": "test:_:Handle:Message",
                        "correlationId": {
                            "location": "$message.header#/correlation_id"
                        },
                        "payload": {"$ref": "#/components/schemas/EmptyPayload"},
                    }
                },
                "schemas": {"EmptyPayload": {"title": "EmptyPayload", "type": "null"}},
            },
        }
