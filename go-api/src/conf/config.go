package conf

import "github.com/spf13/viper"

var ConfReader *viperConfigReader

type viperConfigReader struct {
	viper *viper.Viper
}

func (v *viperConfigReader) GetString(key string) string {
	return v.viper.GetString(key)
}

func init() {
	v := viper.New()
	v.SetConfigName("clinicConfig")
	v.AddConfigPath("conf")

	err := v.ReadInConfig()
	if err != nil {
		panic(err)
	}

	ConfReader = &viperConfigReader{
		viper: v,
	}
}
