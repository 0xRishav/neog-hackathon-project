export const checkIfExists = (array,userId) => {
    const isPresent= array.find((user)=> user?.id === userId);
    return isPresent
}