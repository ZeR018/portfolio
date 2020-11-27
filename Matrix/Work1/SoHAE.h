#pragma once
#include "ClassVector.h"
#include "module.h"
#include "Matrix.h"


template <typename T>
class SoHAE : public Matrix<T> {
public:
	SoHAE(int n) : Matrix<T>(n) {};

	void print(T* rv) {
		for (int j = 0; j < this->size; j++) {
			for (int i = 0; i < this->size; i++) {
				std::cout << this->m_x[j][i] << '\t';
			}
			std::cout << " | " << rv[j];
			std::cout << std::endl;
		}
		std::cout << std::endl;
	}

	MyVector <T> gauss(T* rv) {
		//Print advanced SoHAE
		cout << "The initial system: " << endl;
		print(rv);

		//saving the original matrix
		Matrix<T> oM(this->size);
		for (int i = 0; i < this->size; i++) {
			for (int j = 0; j < this->size; j++) {
				oM[j][i] = this->m_x[j][i];
			}
		}

		for (int i = 0; i < this->size; i++) {
			int count = 0;
			for (int j = 0; j < this->size; j++) {
				if (this->m_x[i][j] == 0) {
					count++;
				}
				else {
					break;
				}
			}
			//All elements in row 0
			if (count == this->size) {
				if (rv[i] == 0) {
					// 0 = 0
					cout << "Can't solve: the equation not depends on the variable" << endl;
					exit(1);
				}
				else if (rv[i] != 0) {
					// 0 != 0
					cout << "No solution: the system of equations is inconsistent. 0*x = B, B != 0" << endl;
					exit(2);
				}
			}
		}

		int index = 0; // Calculates how many of the first coefficients of the side row are zero
		for (int j = 0; j < this->size; j++) {
			// Choice main element
			T maxValue = 0;
			int strMaxValue = 0;
			// Search max value
			for (int i = 0; i + j < this->size; i++) {
				if (maxValue <= module(this->m_x[i + j][j])) {
					maxValue = module(this->m_x[i + j][j]);
					strMaxValue = i + j;
				}
			}
			if (maxValue == 0) {
				cout << "Division by 0 when searching for solutions" << endl;
				exit(3);
			}
			//print(rv);
			swap(strMaxValue, j, rv);

			//Subtracts one row multiplied by a number from all the others
			for (int i = 1; i + j < this->size; i++) {
				//Subtracts each row element from the corresponding column element
				subtractingRows(j, i + j, rv, index);
			}
			//print(rv);
			index++;
		}
		cout << "Matrix in triangular form" << endl << endl;
		print(rv);


		T* sol = new T[this->size];
		for (int i = this->size - 1; i >= 0; i--) {
			T tmp = 0;
			for (int j = i + 1; j < this->size; j++) {
				tmp += this->m_x[i][j] * sol[j];
			}
			sol[i] = (rv[i] - tmp) / this->m_x[i][i];
		}

		//returns the values of the original matrix
		for (int i = 0; i < this->size; i++) {
			for (int j = 0; j < this->size; j++) {
				this->m_x[j][i] = oM[j][i];
			}
		}

		cout << "The solution of the system: " << endl;
		MyVector<T>(this->size, sol).print();
		return MyVector<T>(this->size, sol);
	}

private:

	void swap(int str1, int str2, T* rv) {
		if (str1 < this->size && str2 < this->size)
		{
			T r_tmp;
			r_tmp = rv[str1];
			rv[str1] = rv[str2];
			rv[str2] = r_tmp;
			T* tmp = new T[this->size];
			for (int i = 0; i < this->size; i++)
			{
				tmp[i] = this->m_x[str1][i];
				this->m_x[str1][i] = this->m_x[str2][i];
				this->m_x[str2][i] = tmp[i];
			}
			delete[]tmp;
		}
		else
		{
			std::cout << "Wrong string!";
			exit(1);
		}
	}

	// Вычитание строк
	void subtractingRows(int mainRow, int sideRow, T* rv, int index) {
		T firstIndex = this->m_x[sideRow][index];
		for (int i = 0; i + index < this->size; i++) {
			this->m_x[sideRow][i + index] -= this->m_x[mainRow][i + index] * firstIndex / this->m_x[mainRow][index];
		}
		rv[sideRow] -= rv[mainRow] * firstIndex / this->m_x[mainRow][index];
	}
};

// exit(1): 0 = 0 
// exit(2): 0 = B, B!=0 
// exit(3): Zero column 