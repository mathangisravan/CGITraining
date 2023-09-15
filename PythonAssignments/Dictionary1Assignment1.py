# Create a dictionary with books tittle and authos name
Books = {
    "Hamlet": "William_Shakespeare",
    "Paradise_Lost": "John_Milton",
    "Anna_Karenina": "Leo_Tolstoy"

}

# Add New Book and author to the Dictionary
Books["Three_men_in_a_boat"] = "Jerome"

# Update the name of the existing book in the dictionary
Books["Hamlet"] = "Mathangi Sravan"

# Loop through the dictionary and print book tittle and author name
for key, value in Books.items():
    print(key, ":", value)


