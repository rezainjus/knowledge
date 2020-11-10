package main 

import "fmt"

func sum(a int,b int) int {
	return a + b
}

func dec(c int, d int ) int {
	return c - d
}

func main() {
	fmt.Println(sum(2,3))
	fmt.Println(dec(17,7))
}