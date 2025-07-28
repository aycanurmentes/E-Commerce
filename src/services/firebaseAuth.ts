import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export interface AuthError {
  code: string;
  message: string;
}

export class FirebaseAuthService {
  // Email/Password sign in
  static async signInWithEmail(email: string, password: string): Promise<FirebaseAuthTypes.UserCredential> {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      return userCredential;
    } catch (error: any) {
      throw this.handleAuthError(error);
    }
  }

  // Email/Password sign up
  static async signUpWithEmail(email: string, password: string): Promise<FirebaseAuthTypes.UserCredential> {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      return userCredential;
    } catch (error: any) {
      throw this.handleAuthError(error);
    }
  }

  // Sign out
  static async signOut(): Promise<void> {
    try {
      await auth().signOut();
    } catch (error: any) {
      throw this.handleAuthError(error);
    }
  }

  // Password reset
  static async resetPassword(email: string): Promise<void> {
    try {
      await auth().sendPasswordResetEmail(email);
    } catch (error: any) {
      throw this.handleAuthError(error);
    }
  }

  // Get current user
  static getCurrentUser(): FirebaseAuthTypes.User | null {
    return auth().currentUser;
  }

  // Listen to auth state changes
  static onAuthStateChanged(callback: (user: FirebaseAuthTypes.User | null) => void) {
    return auth().onAuthStateChanged(callback);
  }

  // Translate error messages to English
  private static handleAuthError(error: any): AuthError {
    let message = 'An error occurred. Please try again.';

    switch (error.code) {
      case 'auth/invalid-email':
        message = 'Invalid email address.';
        break;
      case 'auth/user-disabled':
        message = 'This account has been disabled.';
        break;
      case 'auth/user-not-found':
        message = 'No user found with this email address.';
        break;
      case 'auth/wrong-password':
        message = 'Wrong password.';
        break;
      case 'auth/email-already-in-use':
        message = 'This email address is already in use.';
        break;
      case 'auth/weak-password':
        message = 'Password is too weak. Must be at least 6 characters.';
        break;
      case 'auth/too-many-requests':
        message = 'Too many failed login attempts. Please try again later.';
        break;
      case 'auth/network-request-failed':
        message = 'Network error. Please check your internet connection.';
        break;
      case 'auth/invalid-credential':
        message = 'Invalid credentials.';
        break;
      case 'auth/operation-not-allowed':
        message = 'This operation is not currently supported.';
        break;
      case 'auth/requires-recent-login':
        message = 'This operation requires recent login.';
        break;
      default:
        message = error.message || 'An unknown error occurred.';
    }

    return {
      code: error.code,
      message
    };
  }
} 