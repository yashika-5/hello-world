# Python3 implementation of the approach
# Function to print the nodes having 
# maximum and minimum degree 
def minMax(edges, leng, n) : 
    # Map to store the degrees of every node 
    m = {};
     for i in range(leng) :
        m[edges[i][0]] = 0;
        m[edges[i][1]] = 0;
     for i in range(leng) :
         # Storing the degree for each node
        m[edges[i][0]] += 1;
        m[edges[i][1]] += 1; 
    # maxi and mini variables to store 
    # the maximum and minimum degree 
    maxi = 0; 
    mini = n; 
    for i in range(1, n + 1) :
        maxi = max(maxi, m[i]); 
        mini = min(mini, m[i]); 
    # Printing all the nodes 
    # with maximum degree 
    print("Nodes with maximum degree : ", 
                                end = "")
     for i in range(1, n + 1) :
        if (m[i] == maxi) :
            print(i, end = " "); 
    print()
    # Printing all the nodes 
    # with minimum degree 
    print("Nodes with minimum degree : ", 
                                end = "")
     for i in range(1, n + 1) :
        if (m[i] == mini) :
            print(i, end = " "); 
# Driver code 
if __name__ == "__main__" : 
    # Count of nodes and edges 
    n = 4; m = 6; 
    # The edge list 
    edges = [[ 1, 2 ], [ 1, 3 ], 
             [ 1, 4 ], [ 2, 3 ], 
             [ 2, 4 ], [ 3, 4 ]]; 
    minMax(edges, m, 4); 
# This code is contributed by AnkitRai01
