interface Address {
  geolocation: {
    lat: string;
    long: string;
  };
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

export interface UserData {
  id: number;
  email: string;
  username: string;
  password: string;
  phone: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: Address;
}
