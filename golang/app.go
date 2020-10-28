package main

import "fmt"

func add(x float64,y float64) float64 {
	return x+y
}

func multiple(a,b string) (string,string) {
	return a,b
}

func main() {
	w1,w2 := "Hello","Reza"

	fmt.Println(multiple(w1,w2))


}