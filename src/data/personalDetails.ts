import { TextInputProps } from 'react-native';

export interface PersonalDetailField extends TextInputProps {
  label: string;
  bottomRightButtonText?: string;
  onBottomRightPress?: () => void;
}

export const personalDetailsFields = [
  {
    label: 'Email Address',
    placeholder: 'aashifa@gmail.com',
    keyboardType: 'email-address',
  },
  {
    label: 'Password',
    placeholder: '***********',
    secureTextEntry: true,
    bottomRightButtonText: 'Change Password',
    onBottomRightPress: () => console.log('Şifremi unuttum'),
  },
  {
    label: 'Pincode',
    placeholder: '450116',
    keyboardType: 'numeric',
  },
  {
    label: 'Address',
    placeholder: '216 St Pauls Rd',
    keyboardType: 'default',
  },
  {
    label: 'City',
    placeholder: 'London',
    keyboardType: 'default',
  },
  {
    label: 'State',
    placeholder: 'N1 2LL,',
    keyboardType: 'default',
  },
  {
    label: 'Country',
    placeholder: 'United Kingdom',
    keyboardType: 'default',
  },
  {
    label: 'Bank Account Number',
    placeholder: '204356XXXXXXX',
    keyboardType: 'numeric',
  },
  {
    label: 'Account Holder’s Name',
    placeholder: 'Abhiraj Sisodiya',
    keyboardType: 'default',
  },
  {
    label: 'IFSC Code',
    placeholder: 'SBIN00428',
    keyboardType: 'default',
  },
];
