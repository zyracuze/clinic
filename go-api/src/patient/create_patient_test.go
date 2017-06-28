package patient

import (
	"testing"
)

type MockCounter struct{}

func (m MockCounter) count() (int, error) {
	return 1, nil
}

func TestGenerateIdOfPatient(t *testing.T) {
	expected := "P000002"
	id := generateIdPatient(MockCounter{})
	if id != "P000002" {
		t.Fatalf("Expected %s but got %s", expected, id)
	}
}
