import { createClient } from 'redis';

// This line is the secret: It looks for the environment variable you set in Render
const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';

const redisClient = createClient({
    url: redisUrl
});

// Handle Redis connection errors
redisClient.on('error', (err) => {
    console.error('Redis Error:', err);
});

// Function to connect to Redis
const connectRedis = async () => {
    try {
        await redisClient.connect();
        console.log('✅ Redis Connected to Cloud');
    } catch (err) {
        console.error('❌ Redis Connection Failed:', err);
    }
};

export { redisClient, connectRedis };
