#include <iostream>
using namespace std;

int hole[] = { 1, 0, 0, 0, 1, 0, 1, 0, 2, 1 };


int countHoles(int num)

{
    int holes = 0;

    while (num > 0) {
        int d = num % 10;


        
        holes += hole[d]; 
        num /= 10;

    }
    

    return holes;

}
int main()

{

    int num = 46908;


    cout <<"Amount of holes:"<< countHoles(num)<< " In number: "<<num;

  

    return 0;

}