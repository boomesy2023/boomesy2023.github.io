from typing import List


class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        left = 0
        right = len(nums)

        while left < right:
            if nums[left] == val:
                nums[left] = nums[right - 1]
                right -= 1
            else:
                left += 1

        return left


if __name__ == "__main__":
    s = Solution()
    print(s.removeElement([3, 2, 2, 3], 3))
