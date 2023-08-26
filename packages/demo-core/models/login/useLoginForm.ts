import { login } from '../api/accounts';
import { User } from '../user/User';

export default function useLoginForm(react) {
  const [name, setName] = react.useState('');
  const [nameError, setNameError] = react.useState('');
  const [password, setPassword] = react.useState('');
  const [passwordError, setPasswordError] = react.useState('');
  const [isSubmitting, setIsSubmitting] = react.useState(false);

  function handleNameChange(newValue: string) {
    setName(newValue);
  }

  function handlePasswordChange(newValue: string) {
    setPassword(newValue);
  }

  async function handleSubmit(onSuccess: (user: User) => void) {
    setNameError('');
    setPasswordError('');
    if (!name) {
      setNameError('Please enter your name');
      return;
    }
    if (!password) {
      setPasswordError('Please enter your password');
      return;
    }
    if (name !== 'admin' || password !== 'admin') {
      setPasswordError('Invalid name or password');
      return;
    }

    console.log('login');
    // sleep
    setIsSubmitting(true);
    const user = await login(name, password);
    onSuccess(user);
  }

  return {
    name,
    nameError,
    password,
    passwordError,
    isSubmitting,
    handleNameChange,
    handlePasswordChange,
    handleSubmit,
  };
}
