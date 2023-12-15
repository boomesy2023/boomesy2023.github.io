struct Solution;

impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        // 双指针
        // 如果长度小于3直接返回
        let l = nums.len();
        if nums.len() < 3 {
            return nums.len() as i32;
        }
        // 定义计数
        let mut count = 1;
        // 定义当前指针
        let mut cur = 0;
        for i in 1..l {
            /// 如果相等 且计数小于2 就移动指针 覆盖当前值 因为`不需要考虑数组中超出新长度后面的元素。`
            if nums[i] == nums[cur] {
                if count < 2 {
                    cur += 1;
                    nums[cur] = nums[i];
                    count += 1;
                }
            } else {
                // 如果不相等 左指针+1 覆盖当前值 相当于删除了当前值
                cur += 1;
                nums[cur] = nums[i];
                count = 1;
            }
        }
        return (cur + 1) as i32;
    }
}

fn main() {
    let mut nums = vec![0, 1, 1, 1, 2, 2, 3];
    let result = Solution::remove_duplicates(&mut nums);
    println!("{}", result);
}
