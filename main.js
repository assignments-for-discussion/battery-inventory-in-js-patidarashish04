// const assert = require('assert');

// function countBatteriesByHealth(presentCapacities) {
//   return {
//     healthy: 0,
//     exchange: 0,
//     failed: 0
//   };
// }

// function testBucketingByHealth() {
//   console.log('Counting batteries by SoH...');
//   const presentCapacities = [113, 116, 80, 95, 92, 70];
//   counts = countBatteriesByHealth(presentCapacities);
//   assert(counts["healthy"] == 2);
//   assert(counts["exchange"] == 3);
//   assert(counts["failed"] == 1);
//   console.log("Done counting :)");
// }

// testBucketingByHealth();



//function for all types of batteries
const assert = require('assert');

function classifyBatteries(presentCapacities) {
  const ratedCapacity = 120; 
  let healthyCount = 0;
  let exchangeCount = 0;
  let failedCount = 0;

  for (const presentCapacity of presentCapacities) {
    const stateOfHealth = calculateStateOfHealth(presentCapacity, ratedCapacity);

    if (isHealthy(stateOfHealth)) {
      healthyCount++;
    } else if (isExchange(stateOfHealth)) {
      exchangeCount++;
    } else {
      failedCount++;
    }
  }
  console.log('Healthy Batteries Count:', healthyCount);
  console.log('Exchange Batteries Count:', exchangeCount);
  console.log('Failed Batteries Count:', failedCount);
  return { healthy: healthyCount, exchange: exchangeCount, failed: failedCount };
}

function calculateStateOfHealth(presentCapacity, ratedCapacity) {
  return (presentCapacity / ratedCapacity) * 100;
}

function isHealthy(stateOfHealth) {
  // SoH more than 80%, up to 100%: classified as healthy
  return stateOfHealth > 80;
}

function isExchange(stateOfHealth) {
  // SoH between 80% and 62%: classified as exchange
  return stateOfHealth >= 62 && stateOfHealth <= 80;
}

function testBatteriesClassification() {
  // Test Case (
  const presentCapacities2 = [120, 0, 60, 80, 110, 34];
  const result1 = classifyBatteries(presentCapacities2);
  console.log('Test Case :', result1);
  try {
    assert.strictEqual(result1.healthy, 2, 'Incorrect number of healthy batteries');
    assert.strictEqual(result1.exchange, 3, 'Incorrect number of exchange batteries');
    assert.strictEqual(result1.failed, 1, ' Incorrect number of failed batteries');
    console.log('Test Case  passed!');
  } catch (error) {
    console.error('Test Case failed:', error.message);
    // Custom error handling logic can be added here
  }
}

testBatteriesClassification();
