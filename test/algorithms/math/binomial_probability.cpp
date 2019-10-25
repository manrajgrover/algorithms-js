#include<iostream>
///a code to find the binomial probability over a range or for an instance
using namespace std;

float powe(float b, int ex)
{
    if(ex==0)
        return 1;
    int i=ex;
    float tp1=b;
    while(i!=1)
    {
        tp1=tp1*b;
        i--;
    }
    return tp1;
}
float pf(float theta, int n, int x)
{
    float tp2;
    tp2=(powe(theta, x))*(powe((1-theta), (n-x)));
    return tp2;
}

long double combo(long double n, long double x)
{
    long double y=0,z=0;
    if(x < (n-x))
    {
        y=n-x;
        z=x;
    }
    else
    {
        y=x;
        z=n-x;
    }
    for (int i=n-1;i>y;i--)
    {
        n=n*i;
    }
    if(z==0)
        return 1;
    for (int j=z-1;j>1;j--)
    {
        z=z*j;
    }
    return (n/z);
}

float bino(int n, int x, float theta)
{
    float tp3;
    tp3=combo(n,x)*pf(theta,n,x);
    return tp3;
}
int main()
{
	int n, r1=0, r2=0, ch=0;
	float theta;
	long double bipro;
    cout<<"\nEnter total no. of terms : ";
    cin>>n;
    cout<<"\nEnter the probability of success : ";
    cin>>theta;
    cout<<"\nPress 1 for probability of a particular value \nPress 0 for probability of a range of values : ";
    cin>>ch;
    if(ch==1)
    {
        cout<<"\nEnter the value of x : ";
        cin>>r1;
        bipro=bino(n, r1, theta);
    }
    else
    {
        cout<<"\nEnter the range(x1 to x2) s.t. x1<x2 : ";
        cin>>r1;
        cin>>r2;
        int i;
       bipro=bino(n,r1,theta);
        //cout << "Hello " << endl;
        for(i=r1+1;i<=r2;i++)
        {
           //cout << i << " : " ;
            bipro=bipro+bino(n,i,theta);
        }
    }
    cout<<"\n\a\nThe probability is : "<<bipro<<"\n\n\n\n";
    return 0;
}
