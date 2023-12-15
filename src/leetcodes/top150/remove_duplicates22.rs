struct Solution;

impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        let l = nums.len();
        if l < 3 {
            return l as i32;
        }

        // 数组的前两个数必然可以被保留，因此对于长度不超过 2 的数组，
        // 我们无需进行任何处理，对于长度超过 2 的数组，我们直接将双指针的初始值设为 2 即可。
        // **这里很机智**
        let mut slow = 2;
        let mut fast = 2;

        while fast < l {
            // 这里还是覆盖即可 省去了删除操作
            if nums[slow - 2] != nums[fast] {
                nums[slow] = nums[fast];
                slow += 1;
            }
            fast += 1;
        }
        slow as i32
    }
}

fn main() {
    let mut nums = vec![0, 1, 1, 1, 2, 2, 3];
    let result = Solution::remove_duplicates(&mut nums);
    println!("{}", result);
}
