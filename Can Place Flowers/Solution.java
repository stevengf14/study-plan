class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        boolean result = false;
        int newFlowers = 0;
        for (int i = 0; i < flowerbed.length; i++) {
            if (i == 0) {
                if (flowerbed[i] == 0) {
                    if (flowerbed.length == 1) {
                        newFlowers++;
                        continue;
                    }
                    if (flowerbed[i + 1] == 0) {
                        newFlowers++;
                        flowerbed[i] = 1;
                    }
                }
                continue;
            }
            ;
            if (i == (flowerbed.length - 1)) {
                if (flowerbed[i] == 0) {
                    if (flowerbed[i - 1] == 0) {
                        newFlowers++;
                        flowerbed[i] = 1;
                    }
                }
                continue;
            }
            if (flowerbed[i] == 0) {
                if (flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0) {
                    newFlowers++;
                    flowerbed[i] = 1;
                }
            }
        }
        return newFlowers >= n;
    }
}
