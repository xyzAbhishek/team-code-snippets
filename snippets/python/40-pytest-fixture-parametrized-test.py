import pytest

@pytest.mark.parametrize("raw,expected", [("10", 10), ("0", 0), ("-5", -5)])
def test_parse_int(raw, expected):
    assert int(raw) == expected