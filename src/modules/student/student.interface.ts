type Guardian = {
  fatherName: string;
  fatherOce: string;
  fatherContactNo: string;
};

export interface Student {
  id: string;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  gender: 'Male' | 'Female';
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroups?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  parmanentAddress: string;
  guardian: Guardian;
}
