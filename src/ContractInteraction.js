import { ethers } from "ethers";

// Contract address and ABI
const contractAddress = "CONTRACT_ADDRESS";
const contractABI = [
  // Contract ABI here
];

// Connect to the Ethereum provider
const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc-mumbai.matic.today"
);

// Initialize the contract instance
const contract = new ethers.Contract(contractAddress, contractABI, provider);

export async function getTodoListCount() {
  const count = await contract.getTodoListCount();
  return count.toNumber();
}

export async function addTodoList() {
  const tx = await contract.addTodoList();
  await tx.wait();
}

export async function addTodo(todoListIndex, title, description) {
  const tx = await contract.addTodo(todoListIndex, title, description);
  await tx.wait();
}

export async function updateTodoTitle(todoListIndex, todoIndex, title) {
  const tx = await contract.updateTodoTitle(todoListIndex, todoIndex, title);
  await tx.wait();
}

export async function updateTodoDescription(
  todoListIndex,
  todoIndex,
  description
) {
  const tx = await contract.updateTodoDescription(
    todoListIndex,
    todoIndex,
    description
  );
  await tx.wait();
}
