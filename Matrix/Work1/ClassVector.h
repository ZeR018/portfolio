#pragma once

using namespace std;

template < typename T >
class MyVector {
public: 
	MyVector() {
		m_x = new T[1];
		size = 1;
	}

	MyVector(int _size, T value = T()) {
		size = _size;
		m_x = new T[size];
		for (int i = 0; i < size; i++) {
			m_x[i] = value;
		}
	}

	MyVector(int _size, T* values) {
		size = _size;
		m_x = new T[_size];
		for (int i = 0; i < _size; i++)
		{
			m_x[i] = values[i];
		}
	}

	MyVector& operator = (const MyVector& other) {
		delete[]this->m_x;
		this->m_x = new T[other.size];
		for (int i = 0; i < other.size; i++) {
			this->m_x[i] = other.m_x[i];
		}
		return *this;
	}

	MyVector(const MyVector& other) {
		delete[]this->m_x;
		this->size = other.size;
		this->m_x = new T[other.size];
		for (int i = 0; i < other.size; i++)
		{
			this->m_x[i] = other.m_x[i];
		}
		return *this;
	}

	void fill() {
		for (int i = 0; i < this->size; i++) {
			cout << "Input " << i+1 << " element of right value: " << endl;
			cin >> this->m_x[i];
		}
	}
	
	~MyVector() {
		delete[]m_x;
	}

	void print() {
		cout << '(';
		for (int i = 0; i < this->size; i++) {
			if (i != 0) {
				cout << ' ';
			}
			cout << this->m_x[i];
			if (i != this->size - 1) {
				cout << ';';
			}
		}
		cout << ')';
		cout << endl;
	}

	T& operator[](int i) {
		return m_x[i];
	}

	int getSize() {
		return size;
	}


protected:
	T* m_x;
	int size;
};

