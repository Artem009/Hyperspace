const { create } = require('./src/services/users/create');

// Test user data with unique email using timestamp
const timestamp = new Date().getTime();
const testUser = {
  email: `test${timestamp}@example.com`,
  name: 'Test User',
  totalBalls: 100,
  userGuess: 50,
  userScore: 75,
  youResult: 80
};

// Test the create function
async function testCreateUser() {
  try {
    console.log('Attempting to create a user...');
    const user = await create(testUser);
    console.log('User created successfully:', user);
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

// Run the test
testCreateUser();
