import { SignupInput } from "../generated/graphql";

export const validateSignup = (input: SignupInput) => {
  if (!/\S+@\S+\.\S+/.test(input.email)) {
    return "Incorrect email";
  }

  if (input.username.length < 4 || input.username.length > 15) {
    return "Username must be 4-15 characters";
  }

  if (input.password.length < 4) {
    return "Password must be min 6 characters";
  }
};

export const validateTweet = (text: string) => {
  if (text.length === 0 || text.length > 140) {
    return "Tweet must be 1-140 characters";
  }
};
