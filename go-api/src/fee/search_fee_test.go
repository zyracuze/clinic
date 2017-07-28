package fee

import (
	"testing"
	"time"
)

func TestParseTimeAfter(t *testing.T) {
	afterDay := 1
	af := time.Now().AddDate(0, 0, afterDay*-1)
	expectTime := setTime(af, 0, 0, 0, 0)

	actual := parseTime(afterDay)

	if actual != expectTime {
		t.Fatalf("Expected %s but got %s", expectTime, actual)
	}

}
