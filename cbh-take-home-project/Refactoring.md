# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
This is a summary explaination of the refactoring i did but i also made comment on each line explaining what is done and why it's done 


### Explanation of the changes made:

I removed the TRIVIAL_PARTITION_KEY constant because it's only used once and its value can be inlined into the code to reduce clutter and increase readability.
I renamed the candidate variable to partitionKey for more clarity in what the variable represents.
I removed the type check if (typeof candidate !== "string") since the JSON.stringify method will always return a string, so the check is unnecessary.
I used the || operator to assign partitionKey a value if event?.partitionKey is falsy, which reduces the amount of code and makes it more concise.
I used template literals instead of string concatenation to make the code more readable and simplify the syntax.

### My tests explaination 

These tests cover the following scenarios:

A partition key is generated from the event object
A partition key is taken from the event's partitionKey property
If the partition key generated from the event object is too long, a hash is returned instead
If no event is passed, a hash is returned
Note that the hash length is 128 because the sha3-512 algorithm outputs a 512-bit hash, which is 64 characters in hexadecimal representation.
