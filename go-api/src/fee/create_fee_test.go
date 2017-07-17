package fee

import (
	"testing"
)

type MockCounter struct{}

func (m MockCounter) count() (int, error) {
	return 1, nil
}

func TestGenerateIdOfFee(t *testing.T) {
	expected := "F000002"
	id := generateIdFee(MockCounter{})
	if id != "F000002" {
		t.Fatalf("Expected %s but got %s", expected, id)
	}
}
