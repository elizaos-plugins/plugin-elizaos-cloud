#!/usr/bin/env bun

/**
 * Simple test script to verify ElizaOS plugin integration
 */

import { elizaosCloudPlugin } from './dist/index.js';

// Mock runtime to test plugin initialization
const mockRuntime = {
  getSetting: (key, defaultValue) => {
    // Use environment variables or defaults
    const envValue = process.env[key];
    if (envValue !== undefined) {
      console.log(`📋 [Mock Runtime] Setting ${key}: ${key.includes('API_KEY') ? envValue.substring(0, 12) + '...' : envValue}`);
      return envValue;
    }
    console.log(`📋 [Mock Runtime] Using default for ${key}: ${defaultValue}`);
    return defaultValue;
  },
  character: {
    system: "You are a helpful AI assistant."
  },
  emitEvent: (eventType, data) => {
    console.log(`📡 [Mock Runtime] Event emitted: ${eventType}`, data);
  },
  useModel: async (modelType, params) => {
    console.log(`🎯 [Mock Runtime] useModel called: ${modelType}`, params);
    return "Mock response for testing";
  }
};

async function testPluginIntegration() {
  console.log('🚀 Starting ElizaOS Plugin Integration Test\n');
  
  try {
    // Load environment variables
    console.log('🔧 Loading environment variables...');
    const { config } = await import('dotenv');
    config({ path: '.env' });
    
    console.log('\n📦 Plugin Info:');
    console.log(`   Name: ${elizaosCloudPlugin.name}`);
    console.log(`   Description: ${elizaosCloudPlugin.description}\n`);
    
    // Test plugin initialization
    console.log('🏗️  Testing plugin initialization...');
    if (elizaosCloudPlugin.init) {
      await elizaosCloudPlugin.init(elizaosCloudPlugin.config, mockRuntime);
      console.log('✅ Plugin initialization completed\n');
    }
    
    // Wait a bit for initialization logs to appear
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('🎉 Test completed successfully!');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.error('🔍 Full error:', error);
    process.exit(1);
  }
}

// Run the test
testPluginIntegration();