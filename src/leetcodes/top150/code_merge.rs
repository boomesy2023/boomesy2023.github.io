struct Solution;

impl Solution {
    //逆向双指针
    // nums1的长度包括nums2 所以完全可以从后往前替换元素 不会被覆盖
    pub fn merge(nums1: &mut Vec<i32>, m: i32, nums2: &mut Vec<i32>, n: i32) {
        if n == 0 {
            return;
        }

        let mut p1: i32 = m - 1;
        let mut p2: i32 = n - 1;
        let mut tail: i32 = m + n - 1;

        while p1 >= 0 || p2 >= 0 {
            let cur: i32;
            if p1 == -1i32 {
                cur = nums2[p2 as usize];
                p2 -= 1;
            } else if p2 == -1i32 {
                cur = nums1[p1 as usize];
                p1 -= 1;
            } else if nums1[p1 as usize] > nums2[p2 as usize] {
                cur = nums1[p1 as usize];
                p1 -= 1;
            } else {
                cur = nums2[p2 as usize];
                p2 -= 1;
            }

            nums1[tail as usize] = cur;
            tail -= 1;
        }
    }
}

fn main() {
    let mut nums1 = vec![1, 2, 3, 0, 0, 0];
    let mut nums2 = vec![2, 5, 6];
    Solution::merge(&mut nums1, 3, &mut nums2, 3);
    println!("{:?}", nums1);
}
