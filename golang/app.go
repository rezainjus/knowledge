package main 

import "fmt"

// create a function that print every even numbers between 1 to 20

func main() {
	for n := 1; n < 20; n++ {
		if n%2 == 0 {
			fmt.Println(n)
		} else { 
			continue
		}
	}

}