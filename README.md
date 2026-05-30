# Password Strength Checker

A simple web application that evaluates the strength of a password as you type.

## Features

- Real-time password strength evaluation
- Detects:
  - Alphabetic characters
  - Numeric characters
  - Special characters
  - Password length requirements
- Password visibility toggle

## Technologies Used

- HTML
- CSS
- JavaScript

## How It Works

The password is evaluated based on the following criteria:

1. Contains alphabetic characters
2. Contains numeric characters
3. Contains special characters
4. Exceeds the minimum length requirement

Each satisfied condition contributes to the overall strength score.

Strength levels:

| Score | Strength |
|---------|---------|
| 0-1 | Very Weak |
| 2 | Weak |
| 3 | Medium |
| 4 | Strong |

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/samitvishwakarma12/password-strength-checker.git
```

2. Open `index.html` in your browser.

## Future Improvements

- Color-coded strength indicators
- Password improvement suggestions
- Progress bar visualization
- Uppercase and lowercase letter checks
- Accessibility improvements

## License

This project is open source and available under the MIT License.
