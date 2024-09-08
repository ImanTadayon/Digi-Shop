import React from "react";

interface DisplayFetchMessage {
  message: string;
}

export const FetchMessage: React.FC<DisplayFetchMessage> = ({ message }) => (
  <div className="h-screen flex justify-center items-center bg-gray-200">
    <p className="text-2xl font-bold text-gray-700 text-center">{message}</p>
  </div>
);
