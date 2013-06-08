#include <stdio.h>
#include <stdlib.h> //malloc, atoi


int main(int argc, char *argv[]) {
	
	if(argc != 2) {
		return 1;
	}

	int numOfDoors = atoi(argv[1]);

	//binary ints filled with 0's
	int *doors;
	doors = malloc(numOfDoors*sizeof(int));
    

	// this loop is to choose what to increment by...
    int i;
	for (i = 1; i < numOfDoors + 1; i++) {

        int j;
		for(j = 0; j < numOfDoors + 1; j += i) {
			if(doors[j] == 0) {
				doors[j] = 1;	
			} else {
				doors[j] = 0;
			}
		}
	}

	// results
    int k;
	for(k = 0; k < numOfDoors + 1; k++) {
		if(doors[k] == 0) {
			puts("closed");
		} else {
			puts("open");
		}
	}

	free(doors);
}
