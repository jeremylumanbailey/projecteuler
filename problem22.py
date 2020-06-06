# https://projecteuler.net/problem=22
import re


def file_read(fname):
        with open(fname) as f:
            data = f.read()
        return data


def main():
  arr = file_read("p022_names.txt")
  arr = re.sub(r"['\"“”‘”«»]", '', arr)
  arr = arr.split(",")
  arr = sorted(arr)
  total_arr_val = 0
  for spot_in_arr in range(0, len(arr)):
    name_val = 0
    for pos in range(0,len(arr[spot_in_arr])):
      name_val += ord(arr[spot_in_arr][pos]) - 64
    total_arr_val += name_val * (spot_in_arr + 1)
    
  print(total_arr_val)



if __name__ == "__main__":
  main()
