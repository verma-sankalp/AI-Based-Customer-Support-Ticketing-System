from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline
import joblib

data = [
    ("payment failed on invoice", "billing"),
    ("cannot reset password", "account"),
    ("app crash after update", "technical"),
    ("refund request for order", "billing"),
    ("login not working", "account"),
    ("system error on dashboard", "technical")
]

X = [x[0] for x in data]
y = [x[1] for x in data]

model = Pipeline([
    ("tfidf", TfidfVectorizer()),
    ("clf", LogisticRegression(max_iter=1000))
])

model.fit(X, y)
joblib.dump(model, "model/ticket_classifier.pkl")
print("Model trained and saved")
