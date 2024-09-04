import React, { useEffect, useState } from "react";
import { userApi } from "../../api/api";
import profilrImage from "../../assets/a4d2481f-9c57-4171-baeb-05ac5e8fc31f.avif";
import { useNavigate } from "react-router-dom"; // Import useNavigate

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

interface UserData {
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

export const User: React.FC = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await userApi();
        setUser(userData);
      } catch (err) {
        setError("Error fetching user data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!user) {
    return <p>No user data available</p>;
  }

  return (
    <div className="h-screen bg-slate-300 p-4 flex flex-col justify-center items-center">
      <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-gray-700 text-center">
          User Profile
        </h1>
        <img
          src={profilrImage}
          alt="User"
          className="md:w-36 md:h-auto mx-auto w-24 h-24 rounded-full mb-4"
        />
        <p>
          <strong>ID:</strong> {user.id}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Name:</strong> {user.name.firstname} {user.name.lastname}
        </p>
        <p>
          <strong>Address:</strong> {user.address.street}, {user.address.city},{" "}
          {user.address.zipcode}
        </p>
      </div>
      <div className="mt-4 w-full max-w-sm">
        <button
          onClick={() => navigate("/")}
          className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        >
          Back
        </button>
      </div>
    </div>
  );
};
