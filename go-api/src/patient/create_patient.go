package patient

type Patient struct {
	FirstName         string `json:"firstname"`
	Lastname          string `json:"lastname"`
	Nickname          string `json:"nickname"`
	Gender            string `json:"gender"`
	Birthday          string `json:"birthday"`
	IdCard            string `json:"idCard"`
	Career            string `json:"career"`
	Tel               string `json:"tel"`
	WorkAddress       string `json:"workAddress"`
	HomeAddress       string `json:"homeAddress"`
	RequiredDocument  string `json:"requiredDocument"`
	CongenitalDisease string `json:"congenitalDisease"`
	BeAllergic        string `json:"beAllergic"`
	EmergencyContact  Emergency
}

type Emergency struct {
	Name         string `json:"name"`
	Relationship string `json:"relationship"`
	Tel          string `json:"Tel"`
}

func CreatePatient() {

}
