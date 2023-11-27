import ssl

from faststream import FastStream
from faststream.kafka import KafkaBroker
from faststream.security import SASLScram256

ssl_context = ssl.create_default_context()
security = SASLScram256(ssl_context=ssl_context, username="admin", password="password")

broker = KafkaBroker("localhost:9092", security=security)
app = FastStream(broker)


@broker.publisher("test_2")
@broker.subscriber("test_1")
async def test_topic(msg: str) -> str:
    pass
