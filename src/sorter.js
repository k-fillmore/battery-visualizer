import React from 'react'

export default function grid_generator(nums) {
    /*
    1. split string into array of shape n,k
    2. initialize array of length n for sum values. 
    3. compute mean of all values
    4. implement greedy such that sum(n) = k 
    
    def find_partition_dynamic(nums, k):
    nums = sorted(nums, reverse=True)
    sums = [0 for _ in range(k)]
    output = [[] for _ in range(k)]
    for num in nums:
        target = sums.index(min(sums))
        sums[target] += num
        output[target].append(num)
    print(sums)
    return(output)






    */
   const array1 = [1, 2, 3, 4, 5, 8, 1, 7, 5]
   const inputCellList = findPartition(array1,5)
    function findPartition(nums, k) {
        nums.sort()
        nums.reverse()
        sums = []
        output = []
        for(i=0;i<k-1; i++){
            sums[i] = 0
            output.append([])
        }
        for (num in nums){
            let target = nums.index(min(sums))
            sums[target] += num
            output[target].append(num)
        }
        return output;
    }
    return (
        <div>
            
            
        </div>
    )
}



return (
    <div>
      <table>
        <thead>
          <tr>
            {students[0].map((item, index) => {
              return <th>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {students.slice(1, students.length).map((item, index) => {
            return (
              <tr>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td>{item[2]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
