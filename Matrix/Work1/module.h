#pragma once

template <typename T>
T module(T a) {
	if (a >= 0) {
		return a;
	}
	else {
		return -a;
	}
}
