import React, { useState } from 'react'
import Input from '../../components/input'
import Select from '../../components/select'
import Submitbutton from '../../components/button'

const Index = () => {
  // 🔹 Form state
  const [formData, setFormData] = useState({
    name: '',
    place: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  // 🔹 Options for Gender
  const option = [
    { id: 1, value: 'Male' },
    { id: 2, value: 'Female' },
    { id: 3, value: 'Other' }
  ];

  // 🔹 Generic Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Log just the changed field
    console.log(`Changed: ${name} = ${value}`);

    // Update state & log full formData
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      console.log("Updated formData:", updated);
      return updated;
    });
  };

  // 🔹 Submit Handler
  const dataSaving = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Reset form
    setFormData({
      name: '',
      place: '',
      email: '',
      mobile: '',
      password: '',
      confirmPassword: '',
      gender: ''
    });
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto mt-10">
      <form onSubmit={dataSaving}>
        <Input name="name" value={formData.name} onChange={handleChange} label="Name:" type="text" />
        <Input name="place" value={formData.place} onChange={handleChange} label="Place:" type="text" />
        <Input name="email" value={formData.email} onChange={handleChange} label="Email:" type="email" />
        <Input name="mobile" value={formData.mobile} onChange={handleChange} maxLength="10" label="Mobile Number" type="number" />
        <Select name="gender" value={formData.gender} onChange={handleChange} label="Gender:" option={option} />
        <Input name="password" value={formData.password} onChange={handleChange} label="Password:" type="password" />
        <Input name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} label="Confirm Password:" type="password" />

        <Submitbutton btnname="Submit" className="bg-green-500 hover:bg-green-700" />
      </form>
    </div>
  );
};

export default Index;
