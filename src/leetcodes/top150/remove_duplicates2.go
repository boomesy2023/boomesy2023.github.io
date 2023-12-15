package main

func removeDuplicates(nums []int) int {
	n := len(nums)
	if n < 3 {
		return n
	}

	slow, fast := 2, 2
	for fast < n {
		if nums[slow-2] != nums[fast] {
			nums[slow] = nums[fast]
			slow++
		}
		fast++
	}
	return slow
}

func main() {
	removeDuplicates([]int{0, 0, 1, 1, 1, 1, 2, 3, 4, 4})
}
