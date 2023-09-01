function threeSum(arr, target) {
// write your code here
	for(let i=0;i<arr.length-1;i++){
		for(let j=0;j<arr.length-i-1;j++){
			if (arr[j] > arr[j+1]){
				const temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	let sum = arr[0] + arr[1] + arr[2];
	for(let i=0;i<arr.length-2;i++){
		let left = i + 1;
	    let right = arr.length-1;
	    while(left < right){
			const currentSum =arr[i]+arr[left]+arr[right];
			if(Math.abs(currentSum - target) < Math.abs(sum - target)){
				sum = currentSum;
			}
			if(currentSum < target){
				left++;
			}
			else{
				right--;
			}
		}
	}
	return sum;
}

module.exports = threeSum;