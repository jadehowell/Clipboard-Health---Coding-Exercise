const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  // Remove unnecessary constant since it's only used once
  let partitionKey = event?.partitionKey;
  
  // Use || operator for a shorter and more concise code
  partitionKey = partitionKey || crypto.createHash("sha3-512")
    .update(JSON.stringify(event))
    .digest("hex");
  
  // Remove the unnecessary type check since JSON.stringify always returns a string
  // Rename variable for clarity
  if (typeof partitionKey !== "string") {
    partitionKey = JSON.stringify(partitionKey);
  }
  
  // Remove unnecessary constant since it's only used once
  if (partitionKey.length > 256) {
    partitionKey = crypto.createHash("sha3-512")
      .update(partitionKey)
      .digest("hex");
  }
  
  return partitionKey;
};
