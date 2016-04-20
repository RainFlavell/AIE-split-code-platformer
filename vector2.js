var Vector2 = function (nX,nY)
{
  this.x = nX;
  this.y = nY;
}

Vector2.prototype.Magnitude = function ()
{
  var mag =this.x*this.x + this.y*this.y;
  mag = math.sqrt(mag)
  return mag
}

//destructive
Vector2.prototype.Normalize = function ()//makes THIS vector normalized
{
  var mag = this.Magnitude();
  this.x = this.x / mag;
  this.y = this.y / mag;
}

//non destructive
Vector2.prototype.GetNormal = function () //reterns a new Vector2 that is a normalized vertion
{
  var mag = this.Magnitude();
  var v2 = new Vector2(0,0);

  v2.x = this.x / mag;
  v2.y = this.y / mag;

  return v2;
}

Vector2.prototype.set = function (x, y)
{
  this.x = x;
  this.y = y;
}
