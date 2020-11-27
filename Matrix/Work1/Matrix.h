#pragma once
#include "ClassVector.h"

template <typename T>
class Matrix : public MyVector<MyVector <T> > {
public:
	Matrix(int n) : MyVector<MyVector <T>>(n, MyVector <T>(n)) {}

	void print() {
		for (int j = 0; j < this->size; j++) {
			for (int i = 0; i < this->size; i++) {
				cout << this->m_x[i][j] << '\t';
			}
			cout << endl;
		}
		cout << endl;
	}

	void fill() {
		for (int i = 0; i < this->size; i++) {
			for (int j = 0; j < this->size; j++)
			{
				cout << "Input [" << i << "]" << "[" << j << "] element:" << endl;
				cin >> this->m_x[i][j];
			}
		}
	}
};
