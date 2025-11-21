/**
 * Easebuzz Payment Gateway Integration Module
 */

const EASEBUZZ_BASE_URL = 'https://stoplight.io/mocks/easebuzz/payment-gateway/804698316';

export interface PaymentDetails {
  courseId: string;
  courseTitle: string;
  amount: number;
  currency: string;
  userId: string;
  userName: string;
  userEmail: string;
}

export interface PaymentResult {
  success: boolean;
  transactionId?: string;
  message: string;
  orderId?: string;
}

export interface EasebuzzTokenRequest {
  key: string;
  txnid: string;
  amount: string;
  productinfo: string;
  firstname: string;
  email: string;
  phone: string;
  surl: string;
  furl: string;
  hash: string;
}

export interface EasebuzzTokenResponse {
  status: number;
  data: string;
  access_key: string;
}

/**
 * Get Easebuzz payment token
 */
export const getEasebuzzToken = async (tokenRequest: EasebuzzTokenRequest): Promise<EasebuzzTokenResponse> => {
  try {
    const response = await fetch(`${EASEBUZZ_BASE_URL}/payment/initiateLink`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tokenRequest)
    });

    if (!response.ok) {
      throw new Error('Failed to get payment token');
    }

    return await response.json();
  } catch (error) {
    console.error('Easebuzz token error:', error);
    throw error;
  }
};

/**
 * Initialize payment process with Easebuzz
 */
export const initiatePayment = async (
  paymentDetails: PaymentDetails
): Promise<PaymentResult> => {
  try {
    const txnid = `TXN_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const tokenRequest: EasebuzzTokenRequest = {
      key: 'YOUR_EASEBUZZ_KEY', // Replace with actual key
      txnid,
      amount: paymentDetails.amount.toString(),
      productinfo: paymentDetails.courseTitle,
      firstname: paymentDetails.userName,
      email: paymentDetails.userEmail,
      phone: '9999999999', // Get from billing details
      surl: `${window.location.origin}/payment/success`,
      furl: `${window.location.origin}/payment/failure`,
      hash: 'generated_hash' // Generate hash as per Easebuzz documentation
    };

    const tokenResponse = await getEasebuzzToken(tokenRequest);
    
    if (tokenResponse.status === 1) {
      // Store purchase in localStorage
      const purchases = JSON.parse(localStorage.getItem('purchases') || '[]');
      purchases.push({
        ...paymentDetails,
        transactionId: txnid,
        orderId: txnid,
        purchaseDate: new Date().toISOString(),
        status: 'completed'
      });
      localStorage.setItem('purchases', JSON.stringify(purchases));

      return {
        success: true,
        transactionId: txnid,
        orderId: txnid,
        message: 'Payment initiated successfully!'
      };
    } else {
      return {
        success: false,
        message: 'Failed to initiate payment'
      };
    }
  } catch (error) {
    console.error('Payment initiation error:', error);
    return {
      success: false,
      message: 'Payment failed. Please try again.'
    };
  }
};

/**
 * Verify payment status with Easebuzz
 */
export const verifyPayment = async (transactionId: string): Promise<boolean> => {
  try {
    const response = await fetch(`${EASEBUZZ_BASE_URL}/transaction/${transactionId}/status`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      return false;
    }

    const result = await response.json();
    return result.status === 'success';
  } catch (error) {
    console.error('Payment verification error:', error);
    return false;
  }
};

/**
 * Get user's purchase history
 * 
 * INTEGRATION POINT: Replace with API call to your backend
 */
export const getUserPurchases = (userId: string) => {
  const purchases = JSON.parse(localStorage.getItem('purchases') || '[]');
  return purchases.filter((p: any) => p.userId === userId);
};

/**
 * Check if user has purchased a specific course
 */
export const hasPurchasedCourse = (userId: string, courseId: string): boolean => {
  const purchases = getUserPurchases(userId);
  return purchases.some((p: any) => p.courseId === courseId && p.status === 'completed');
};

/**
 * Update user's enrolled courses
 * This should be called after successful payment
 */
export const updateUserCourses = (courseId: string) => {
  // This function is imported from auth module
  // Just a placeholder here for payment gateway module
  return true;
};
