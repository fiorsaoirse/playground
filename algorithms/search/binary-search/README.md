Бинарный поиск это алгоритм поиска, который находит позицию искомого элемента в отсортированном массиве. Бинарный поиск сравнивает искомый элемент с элементом по центру массива, если они не идентичны, та половина массива, где элемент не может располагаться, отбрасывается, и поиск продолжается в подходящей половине массива, пока не будет найден искомый элемент. Т.е. массив на каждой итерации сокращается вполовину. Если в итоге поиск сокращается до пустого массива или массива с длиной 1, элемент которого не равен искомому, это значит, искомого элемента в массиве нет.