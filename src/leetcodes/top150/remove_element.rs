struct Solution;

impl Solution {
    pub fn remove_element(nums: &mut Vec<i32>, val: i32) -> i32 {
        let mut left: usize = 0;
        let mut right: usize = nums.len();

        while left < right {
            if nums[left] == val {
                nums[left] = nums[right - 1];
                right -= 1;
            } else {
                left += 1;
            }
        }
        left as i32
    }
}
fn main() {
    let mut nums = vec![3, 2, 2, 3];
    println!("{}, {:?}", Solution::remove_element(&mut nums, 3), nums);
}
