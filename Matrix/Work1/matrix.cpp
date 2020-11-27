// Work1.cpp : Этот файл содержит функцию "main". Здесь начинается и заканчивается выполнение программы.
//

#include <iostream>
#include "ClassVector.h"
#include "module.h"
#include "Matrix.h"
#include "SoHAE.h"

template <typename T>
void inputRV(T *arr, int size) {
	for (int i = 0; i < size; i++) {
		std::cout << "Print " << i << " right value: " << endl;
		std::cin >> arr[i]; 
	}
}

int main() {
	int size;
	cout << "Input matrix size:" << endl;
	cin >> size;
	double* arr = new double[size];

	inputRV(arr, size);
	SoHAE<double> k(size);
	k.fill();
	k.gauss(arr);


	//double* arr2 = new double[size];
	//inputRV(arr2, size);
	//k.gauss(arr2);
}


