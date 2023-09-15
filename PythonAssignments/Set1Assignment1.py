# Create a set of programming languages
Prog_languages = {"C_programming", "Python", "C++", "Java"}

# Add new programming language to the set
Prog_languages.add(".Net")

# Remove one element from the set
Prog_languages.remove("C++")

# traverse through the set
for i in Prog_languages:
    print(i)

# Check if Python is present in the set
print("Is Python present in the set:", "Python" in Prog_languages)

# Create a new set
new_set = {"Python","Java", "java_script", "HTML"}

# Find Common elements in both the sets
common_set = Prog_languages.intersection(new_set)

# Display the common elements present in the sets
print(common_set)
